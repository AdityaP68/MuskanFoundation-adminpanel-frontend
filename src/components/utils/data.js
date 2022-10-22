import styles from "../profiletable/ProfileTable.module.scss";

let src = "https://manofmany.com/wp-content/uploads/2019/04/David-Gandy.jpg";
const data = [
  {
    id: Math.floor(Math.random() * 1000),
    amount: Math.floor(Math.random() * 100000),
    date: new Date().toDateString(),
    addedBy: "Aditya",
    addedOn: new Date().toDateString(),
    method: "UPI",
    paymentBy: "Hemant",
  },
];

for (let i = 0; i < 50; i++) {
  data.push({
    id: Math.floor(Math.random() * 1000),
    amount: Math.floor(Math.random() * 100000),
    date: new Date().toDateString(),
    addedBy: "Aditya",
    addedOn: new Date().toDateString(),
    method: "UPI",
    paymentBy: "Hemant",
  });
}

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Full name",
    width: 190,
    renderCell: (params) => {
      return (
        <>
          <div className={styles.cellWithImage}>
            <img src={src} alt="profile pic" className={styles.cellImg} />
            {params.row.name}
          </div>
        </>
      );
    },
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  { field: "address", headerName: "Address", width: 360 },
  {
    field: "ph_no",
    headerName: "Phone Number",
    type: "number",
    width: 150,
  },
  { field: "email", headerName: "Email", width: 200 },
  { field: "joiningDate", headerName: "Joining Date", width: 200 },
  // {
  //     field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: Math.floor(Math.random() * 1000),
    name: "Aditya Prakash",
    age: Math.floor(Math.random() * 100),
    address: "3/4XX, near Pavillian Mall, Pune, Maharashtra",
    ph_no: "9XXXXXXXXX",
    email: "johndoe@gmail.com",
    joiningDate: new Date().toDateString(),
  },
];

for (let i = 0; i < 30; i++) {
  rows.push({
    id: Math.floor(Math.random() * 1000),
    name: "Aditya Prakash",
    age: Math.floor(Math.random() * 100),
    address: "3/4XX, near Pavillian Mall, Pune, Maharashtra",
    ph_no: "9XXXXXXXXX",
    email: "johndoe@gmail.com",
    joiningDate: new Date().toDateString(),
  });
}

const obj = { data, columns, rows };

export default obj;
