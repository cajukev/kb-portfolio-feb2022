export async function get({ params }) {
  await fetch("http://localhost:8090/customer/album", {
    method:"POST"
  })
  let item = await fetch("http://localhost:8090/customer/album", {
    method:"GET"
  })
  console.log(item)
  if(item){
    return {
      body: { item },
    };
  }
  return {
    status: 404,
  };
}
