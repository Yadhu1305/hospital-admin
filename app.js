function save() {
  const services = document
    .getElementById("services")
    .value.split(",")
    .map(s => s.trim());

  const doctors = document
    .getElementById("doctors")
    .value.split(",")
    .map(d => {
      const parts = d.split(":");
      return {
        name: parts[0],
        specialization: parts[1]
      };
    });

  const hospital = {
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    lat: parseFloat(document.getElementById("lat").value),
    lon: parseFloat(document.getElementById("lon").value),
    isOpen: true,
    services: services,
    doctors: doctors
  };

  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(hospital, null, 2));

  const a = document.createElement("a");
  a.href = dataStr;
  a.download = "hospital.json";
  a.click();
}
