async function accessdata(){
    let apidata = await fetch('https://jsonplaceholder.typicode.com/comments')
    let resdata = await apidata.json()

    let finaldata = resdata.map((e)=>`
    <tr>
      <td> ${e.id} </td>
      <td> ${e.name} </td>
      <td> ${e.email} </td>
    </tr>
    `).join(" ")
    document.querySelector('#showdata').innerHTML = finaldata
}
 accessdata()    