const Form = ({ destination: { googleFormLink, inputNames, autoCompletes } }) => {
  const [selectValue, setSelectValue] = React.useState("");
  const [selectedAutoComplete, setSelectedAutoComplete] = React.useState("");

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    const selectedAutoComplete = autoCompletes.find((autoComplete) => autoComplete.name === selectedOption);
    setSelectValue(selectedAutoComplete ? selectedAutoComplete.message : "");
    setSelectedAutoComplete(selectedAutoComplete.name);
  };

  return (
    <form action={googleFormLink} method="POST" target="_blank">
      <div className="formChunk">
        <label htmlFor="inputName">
          お名前
          <span className="red">*</span>
        </label>
        <input type="text" name={inputNames.name} id="inputName" placeholder="お名前" required />
      </div>
      <div className="formChunk">
        <label htmlFor="inputEmail">
          メールアドレス
          <span className="red">*</span>
        </label>
        <input type="email" name={inputNames.email} id="inputEmail" placeholder="メールアドレス" required />
      </div>
      <div className="formChunk">
        <label htmlFor="selectLetter">
          お問い合わせ内容
          <span className="red">*</span>
        </label>
        <select name="selectLetter" id="selectLetter" required onChange={handleSelectChange}>
          <option value="" disabled selected>
            お問い合わせ内容を選択
          </option>
          {autoCompletes.map((autoComplete, index) => (
            <option key={index} value={autoComplete.name}>
              {autoComplete.name}
            </option>
          ))}
        </select>
        <input type="hidden" name={inputNames.select} value={selectedAutoComplete} className="select-letter"></input>
      </div>
      <div className="formChunk">
        <label htmlFor="textarea">
          本文
          <span className="red">*</span>
          <br />
          {selectValue && `(${selectValue})`}
        </label>
        <textarea name={inputNames.textarea} id="textarea" required></textarea>
      </div>
      <div className="formChunk">
        <label>
          <span className="red">*</span>は必須項目です
        </label>
      </div>
      <div className="formChunk">
        <input type="checkbox" id="agree" />
        <label htmlFor="agree">入力内容を確認しました</label>
      </div>

      <div className="formChunk">
        <button type="submit" className="component-button">
          送信
        </button>
      </div>
    </form>
  );
};
