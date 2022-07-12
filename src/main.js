let data;

fetch("data.json")
  .then(response => response.json())
  .then(dataResponse => {
    data = dataResponse;
    console.log(data);
    createCards();
  });

