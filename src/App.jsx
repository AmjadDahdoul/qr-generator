import { QRCodeCanvas } from "qrcode.react";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

function App() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#000000");
  const [textQuery, setTextQuery] = useState("");
  const [bgSelector, setBgSelector] = useState(true);

  const handleTextChange = (e) => {
    setTextQuery(e.target.value);
  };

  //Todo add save button to save canvas as PNG

  return (
    <>
      <div className='container-lg mx-auto'>
        <h1 className='text-center text-3xl font-semibold m-5 p-5 shadow-2xl rounded-3xl'>
          QR Code Generator
        </h1>

        <div className='flex justify-center items-center my-10'>
          <QRCodeCanvas
            value={textQuery.trim()}
            size={350}
            bgColor={bgColor}
            fgColor={fgColor}
            level='L'
            includeMargin={true}
            className='shadow-2xl rounded-3xl border-4 border-black transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110'
          />
        </div>

        <div className='p-5 flex flex-col justify-center shadow-2xl rounded-3xl m-5'>
          <input
            type='text'
            placeholder='Enter your website or any text'
            value={textQuery}
            maxLength={1024}
            className='border h-10 md:w-1/2 w-full p-3 rounded-2xl shadow-md hover:outline hover:outline-2 hover:outline-black transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 mx-auto'
            onChange={handleTextChange}
          ></input>

          <div className='my-5 p-5 border shadow-2xl rounded-3xl flex flex-col'>
            <div className='w-1/2 mx-auto '>
              <h2 className='text-center font-bold text-2xl'>
                Change The Theme
              </h2>

              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <span className='label-text'>Background Color</span>
                  <input
                    type='radio'
                    name='radio-10'
                    className='radio checked:bg-cyan-500'
                    onClick={() => setBgSelector(true)}
                    checked={bgSelector}
                  />
                </label>
              </div>

              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <span className='label-text'>QR Code Color</span>
                  <input
                    type='radio'
                    name='radio-10'
                    className='radio checked:bg-cyan-500'
                    onClick={() => setBgSelector(false)}
                  />
                </label>
              </div>
            </div>

            <div className='mx-auto py-5'>
              <HexColorPicker
                color={bgSelector ? bgColor : fgColor}
                onChange={bgSelector ? setBgColor : setFgColor}
              />
              <div className='text-center mt-3'>
                <p className='p-3 bg-white rounded-3xl border border-solid'>
                  {bgSelector ? bgColor : fgColor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
