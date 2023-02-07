import { useState } from "react";

const Section = ({ title, description,isVisible, setIsVisible }) => {
  return (
    <div className="border border-red-900 p-2 m-2 shadow-xl rounded-2xl">
      <h2 className="text-xl font-semibold p-2 m-1">{title}</h2>
      {!isVisible?<button
        onClick={() => setIsVisible(true)}
        className="m-2 bg-green-900 text-white rounded-md w-14"
      >
        Show
      </button>:
      <button
        onClick={() => setIsVisible(false)}
        className="m-2 bg-blue-900 text-white rounded-md w-14 "
      >
        Hide
      </button>}
      {isVisible && <h4 className="p-1 m-1">{description}</h4>}
    </div>
  );
};

const Instamart = () => {
  const[viewConfig,setViewConfig]=useState("")
  return (
    <div className="profile">
      <h1 className="text-3xl p-2 m-2 font-semibold rounded-3xl bg-blue-900 text-white">
        Instamart Page
      </h1>
      <Section
        title={"About InstaMart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        isVisible={viewConfig==="About InstaMart"}
        setIsVisible={()=>{setViewConfig("About InstaMart")}}
      />
      <Section
        title={"Contact InstaMart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        isVisible={viewConfig==="Contact InstaMart"}
        setIsVisible={()=>{setViewConfig("Contact InstaMart")}}
      />
      <Section
        title={"Carriers InstaMart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
        }
        isVisible={viewConfig==="Carriers InstaMart"}
        setIsVisible={()=>{setViewConfig("Carriers InstaMart")}}
      />
    </div>
  );
};
export default Instamart;
