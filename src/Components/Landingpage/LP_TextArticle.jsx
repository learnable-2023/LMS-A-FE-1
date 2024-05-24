import Button from "./Button";

const LP_TextArticle = ({ heading, text, btn, title, textStyle, path }) => {
  return (
    <article className="mt-[61px] flex flex-col justify-between font-['Poppins']">
      <p className={`${title} w-[526px] font-bold `}>{heading}</p>
      <p
        className={`w-[546px] ${textStyle} text-base font-normal pb-6 font-['Poppins'] leading-normal`}
      >
        {text}
      </p>

      <Button title={btn} bg={"bg-[#ff9053]"} path={path} />
    </article>
  );
};

export default LP_TextArticle;
