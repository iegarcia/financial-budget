class CustomError {
  constructor(estado, descripcion) {
    this.status = estado;
    this.errorMsg = descripcion;
  }
}

export default CustomError;
