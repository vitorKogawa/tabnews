function status(request, response) {
  response.status(200).json({ status: "Servidor Online!!" });
}

export default status;
