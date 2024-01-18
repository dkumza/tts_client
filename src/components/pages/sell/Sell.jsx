import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuthContext } from '../../contexts/authContext';
import { CustomInput } from '../../forms/CustomInput';
import { CustomButton } from '../../forms/CustomButton';
import axios from 'axios';
import { CustomRadio } from '../../forms/CustomRadio';
import { CustomFormik } from '../../forms/CustomFormik';
import { useProductsContext } from '../../contexts/productsContext';
import { useNavigate } from 'react-router-dom';
import { useMsgContext } from '../../contexts/msgContext';

const PRODUCTS_URL = 'http://localhost:3000/api/products';

export const Sell = () => {
  const { username, token, logout } = useAuthContext();
  const { cats, setProducts, initialValues, setInitialValues } =
    useProductsContext();
  const { addMsg } = useMsgContext();

  let id;
  if (initialValues) {
    ({ id } = initialValues);
  }

  console.log(initialValues);

  const navigate = useNavigate();

  const defaultValues = {
    title: '',
    cat_id: 0,
    content: '',
    username,
    price: '',
    p_condition: '',
  };

  const formik = useFormik({
    initialValues: initialValues ? initialValues : defaultValues,
    validationSchema: Yup.object({
      cat_id: Yup.number().min(1, '*Select category is required'),
      title: Yup.string()
        .trim()
        .min(3, '*Title must be at least 3 characters long')
        .required('*Title is required'),
      content: Yup.string()
        .trim()
        .min(6, '*About must be at least 6 characters long')
        .required('*About is required'),
      price: Yup.number()
        .required('*Price is required')
        .positive('*Price must be a positive number')
        .integer('*Price must be integer'),
      p_condition: Yup.string()
        .required('*Condition is required')
        .oneOf(['new', 'used'], '*Condition must be either "new" or "used"'),
    }),
    onSubmit: (product) => {
      initialValues ? axiosUpdateProduct(product) : axiosNewProduct(product);
    },
  });

  const axiosNewProduct = (data) => {
    axios
      .post(PRODUCTS_URL, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const prodID = res.data.id;
        navigate(`/product/${prodID}`);
        formik.resetForm();
        // state handling after new product created - updating DOM
        setProducts((prevState) => {
          // update new product with id from res.data (db)
          const newProduct = { id: prodID, ...data };
          // spread prev state and add to end newComm
          const newProductState = [...prevState, newProduct];
          return newProductState;
        });

        addMsg('bg-green-200', 'Product added successfully');
      })
      .catch((error) => {
        console.warn('axiosLogin:', error);
        addMsg('bg-red-200', `You need to login again`);
        if (error.response.data === 'Unauthorized') {
          logout();
          navigate('/login');
        }
        const errorFromAPI = error.response.data;
        formik.setErrors(errorFromAPI);
      });
  };

  const axiosUpdateProduct = (data) => {
    axios
      .put(`${PRODUCTS_URL}/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setInitialValues(null);
        navigate(`/product/${id}`);
        addMsg('bg-green-200', 'Product updated successfully');
      })
      .catch((error) => {
        console.warn('axiosLogin:', error);
        addMsg('bg-red-200', `${error.response.data}, you need to login again`);
        if (error.response.data === 'Unauthorized') {
          logout();
          navigate('/login');
        }
        const errorFromAPI = error.response.data;
        formik.setErrors(errorFromAPI);
      });
  };

  return (
    <div className="flex md:p-20 items-center align-middle justify-center min-w-full min-h-full text-white">
      <div className="flex flex-col rounded-lg items-center bg-stone-800 justify-center align-middle mx-auto w-full max-w-md  px-12 py-14 shadow-sm min-h-full ">
        <h1 className="mb-4 text-2xl text-center">
          {initialValues ? 'Edit Product' : 'Sell Item'}
        </h1>
        <form
          className="w-full flex flex-col justify-center items-center"
          onSubmit={formik.handleSubmit}
        >
          <select
            id="cat_id"
            className="w-full appearance-none text-black bg-white px-2 py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.cat_id}
          >
            <option value={0} className="" disabled>
              Select Category
            </option>
            {cats &&
              cats.map((cat) => (
                <option className="" key={cat.cat_id} value={cat.cat_id}>
                  {cat.cat_name}
                </option>
              ))}
          </select>
          <CustomFormik formik={formik} id={'cat_id'} />

          <CustomInput
            css={'w-full'}
            formik={formik}
            type={'text'}
            id={'title'}
            placeholder={'Title'}
          />

          <textarea
            className="w-full px-3 text-black rounded py-2 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-amber-400"
            id="content"
            type="test"
            placeholder="More information about selling item"
            name="content"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
          />
          <CustomFormik formik={formik} id={'content'} />

          <div className="flex w-full gap-6">
            <CustomInput
              css={'w-full'}
              formik={formik}
              type={'number'}
              id={'price'}
              placeholder={'Price'}
            />
          </div>

          <div className="flex w-full gap-4 justify-center">
            <CustomRadio id={'new'} formik={formik} />
            <CustomRadio id={'used'} formik={formik} />
          </div>
          <CustomFormik formik={formik} id={'p_condition'} />

          <CustomButton
            text={initialValues ? 'Update' : 'Publish'}
            css={
              'w-full text-white font-semibold bg-amber-500  hover:bg-amber-400'
            }
            type={'submit'}
          />
        </form>
        {initialValues && (
          <button
            onClick={() => {
              setInitialValues(null);
              navigate(-1);
            }}
            className=""
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
};
