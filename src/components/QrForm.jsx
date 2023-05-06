const QrForm = () => {
  return (
    <div className='p-5 flex flex-col justify-center shadow-2xl rounded-3xl m-5'>
      <input
        type='text'
        placeholder='Enter your website or any text'
        value={textQuery}
        className='border h-10 md:w-1/2 p-3 rounded-2xl shadow-md hover:outline hover:outline-2 hover:outline-black transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-110 mx-auto'
        onChange={handleTextChange}
      ></input>
      <div className='my-5 p-5 border shadow-2xl rounded-3xl flex flex-col'>
        <div className='w-1/2 mx-auto'>
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
            color={bgColor}
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
  );
};

export default QrForm;
