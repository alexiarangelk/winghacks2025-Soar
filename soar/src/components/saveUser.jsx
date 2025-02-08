const saveUser = (event) => {

  //converts event target to array and prints all data that has type radio or checkbox
  const data_to_array = (event) => {
    const formData = Array.from(event.target);
    formData.forEach(datum => {
      if (["first_name_input","last_name_input","organization"].includes(datum.id) == false ) {
        console.log(datum.type, datum.name, datum.checked);
      }
    });
    };

    //testing that we can see the values inputted by user
    //we need to send these values to the database here
    event.preventDefault();
    console.log(event.target);
    console.log(`saving ${event.target.first_name_input.value},
        ${event.target.last_name_input.value},
        ${event.target.organization.value}}`);
    data_to_array(event)
  } 

export default {saveUser, registered};