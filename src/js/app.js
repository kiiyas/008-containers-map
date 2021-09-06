export default class ErrorRepository {
  constructor() {
    this.errors = new Map(
      [
        [10, 'Choose the type!'],
        [20, 'Payment didn\'t recieved!'],
        [30, 'These tickets has been ordered!'],
      ],
    );
  }

  translate(code) {
    const error = this.errors.get(code);
    if (!error) {
      return 'Unknown error';
    }

    return error;
  }
}
