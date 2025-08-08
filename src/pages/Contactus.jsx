import { useFormik } from "formik";

function Contactus() {
  const formik = useFormik({
    initialValues: {
      email: "",
      mobile: "",
      address: ""
    },
    onSubmit: (values) => {
      console.log("Email:", values.email);
      console.log("Mobile:", values.mobile);
      console.log("Address:", values.address);
    }
  })

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        borderRadius: "10px"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#007bff" }}>
        Contact Us
      </h2>

      <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label style={{ marginBottom: "5px" }}>Enter your email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          style={{
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px"
          }}
        />

        <label style={{ marginBottom: "5px" }}>Enter your mobile</label>
        <input
          type="text"
          name="mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          style={{
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px"
          }}
        />

        <label style={{ marginBottom: "5px" }}>Enter your address</label>
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px"
          }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contactus;
