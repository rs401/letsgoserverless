import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import { addCategory } from "../services/categorySvc";

// Seed data
// let names = ["Academic","Art","ATV","Audio","Aviation","Baking","Band","Ball Sports","Beach","Bicycle","Boat","Brewing","Camping","Carnival","Children","Coffee","Combat Sports","Comic Books","Computers","Concert","County Fair","Crafts","Dancing","Dog Park","E-Sports","Electronics","Exploring","Farming","Festival","Fishing","Fitness","Gardening","Geo Caching","Glass Blowing","Go Karts","Gun Range","Hiking","Horse Riding","Hunting","Ice Sports","Magnet Fishing","Martial Arts","Movies","Motor Sports","Mountain Biking","Mushroom Hunting","Music","Other","Park","Pets","Photography","Playground","Recreation","Water Sports","Wheeled Sports"];
// names.forEach((catname) => {
//   let cat = { name: catname };
//   let res = addCategory(cat);
//   res.then(() => {
//     console.log('Added category: ', catname);
//   })
// });
// End Seed data

const AddCat = () => {
  // const [name, setName] = useState("");
  // function handleAddCat(e) {
  //   e.preventDefault();
  //   if(name.trim() === '') {
  //     console.log('empty string entered.');
  //     setName('');
  //     return;
  //   }
  //   let cat = { name: name.trim() };
  //   let result = addCategory(cat);
  //   result.then(data => {
  //     console.log("result.data", data);
  //   })
  //   console.log('result', result);
  //   console.log('name', name.trim());
  //   console.log('cat', cat);

  //   setName('');
  // }
  

  return (
    <div className="py-4">
      {/* <Form
        onSubmit={(e) => {
          handleAddCat(e);
        }}
      >
        <Form.Group className="mb-3" controlId="formCatName">
          <Form.Label>Category Name</Form.Label>
          <Form.Control type="text" value={name} onChange={e => { setName(e.target.value)}} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Category
        </Button>
      </Form> */}
    </div>
  );
};

export default AddCat;
