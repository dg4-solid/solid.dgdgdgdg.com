const Form = ({ destination: { googleFormLink, inputNames, autoCompletes } }) => {
  const [selectValue, setSelectValue] = React.useState("");
  const [selectedAutoComplete, setSelectedAutoComplete] = React.useState("");
  const [submitStatus, setSubmitStatus] = React.useState("");
  const formRef = React.useRef(null); // フォームのrefを追加

  const handleSelectChange = (e) => {
    const selectedOption = e.target.value;
    const selectedAutoComplete = autoCompletes.find((autoComplete) => autoComplete.name === selectedOption);
    setSelectValue(selectedAutoComplete ? selectedAutoComplete.message : "");
    setSelectedAutoComplete(selectedAutoComplete.name);
  };

  // フォーム送信のハンドラー
  const handleSubmit = async (e) => {
    e.preventDefault(); // デフォルトの送信を防ぐ
    const formData = new FormData(formRef.current); // フォームデータを取得

    try {
      const response = await fetch(googleFormLink, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // 送信成功: フォームをメッセージで置き換え
        setSubmitStatus("送信が完了しました。お問い合わせありがとうございます。");
      } else {
        // 送信失敗
        // setSubmitStatus("送信に失敗しました。ページを再読み込みしてもう一度お試しください。");
      }
    } catch (error) {
      setSubmitStatus("送信が完了しました。お問い合わせありがとうございます。");
    }
  };

  // 送信状態に応じて表示を切り替え
  if (submitStatus) {
    return <p className="message">{submitStatus}</p>;
  }

  return (
    <form ref={formRef} id="form" onSubmit={handleSubmit}>
      <div className="formChunk">
        <label htmlFor="inputName">
          お名前
          <span className="red">*</span>
        </label>
        <input type="text" name={inputNames.name} id="inputName" required />
      </div>
      <div className="formChunk">
        <label htmlFor="inputEmail">
          メールアドレス
          <span className="red">*</span>
        </label>
        <input type="email" name={inputNames.email} id="inputEmail" required />
      </div>
      <div className="formChunk">
        <label htmlFor="selectLetter">
          お問い合わせ内容
          <span className="red">*</span>
        </label>
        <select name="selectLetter" id="selectLetter" required onChange={handleSelectChange}>
          <option value="" disabled selected />
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
        <input type="checkbox" id="agree" required />
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
