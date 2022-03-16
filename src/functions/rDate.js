class rDate {
  constructor(inp) {
    this.date = inp;
  }

  _splitDate() {
    const dSplit = this.date.split("-");
    const year = dSplit[0];
    const month = dSplit[1];
    const day = dSplit[2];
  }
}

export default rDate;
