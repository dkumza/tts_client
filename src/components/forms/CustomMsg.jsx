import { useMsgContext } from '../contexts/msgContext';

export const CustomMsg = () => {
  const { messages } = useMsgContext();
  return (
    <div className="absolute right-0  w-full z-0 ">
      <div className=" mx-auto w-full  flex flex-col items-end justify-end">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${msg.type}  py-1 px-20 rounded w-full text-center`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </div>
  );
};
