const settings1 = ["text", "text", "I agree with terms", "checkbox"];
const settings2 = ["text", "text", "phone", "number"];
const settings3 = ["text", "text", "age", "number", "country"];
const extendedSettings1 = ["Ukraine", "Canada"];

class Form {
  constructor(firstElemLabel, firstElemName, secondElemLabel, secondElemName) {
    this.firstElemLabel = firstElemLabel;
    this.firstElemName = firstElemName;
    this.secondElemLabel = secondElemLabel;
    this.secondElemName = secondElemName;
  }

  createForm() {
    return document.body.insertAdjacentHTML(
      "beforeend",
      `<form><label>${this.firstElemLabel}<input type="${this.firstElemName}" name="${this.firstElemName}" /></label><label>${this.secondElemLabel}<input type="${this.secondElemName}" name="${this.secondElemName}" /></label></form>`
    );
  }
}

class extendedForm extends Form {
  constructor(
    firstElemLabel,
    firstElemName,
    secondElemLabel,
    secondElemName,
    selectName,
    selections
  ) {
    super(firstElemLabel, firstElemName, secondElemLabel, secondElemName);
    this.selections = selections;
    this.selectName = selectName;
  }
  createFormEx() {
    let selectionsFields = this.selections
      .map((element) => `<option value="${element}">${element}</option>`)
      .join("");
    return document.body.insertAdjacentHTML(
      "beforeend",
      `<form><label>${this.firstElemLabel}<input type="${this.firstElemName}" name="${this.firstElemName}" /></label><label>${this.secondElemLabel}<input type="${this.secondElemName}" name="${this.secondElemName}" /></label>${this.selectName}<select name="${this.selectName}">${selectionsFields}<select></form>`
    );
  }
}

const newForm = new Form(...settings1);
newForm.createForm();

const newForm2 = new Form(...settings2);
newForm2.createForm();

const newForm3 = new extendedForm(...settings3, extendedSettings1);
newForm3.createFormEx();
