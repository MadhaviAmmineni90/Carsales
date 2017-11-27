using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using CarSalesApp.Controllers;
using CarSalesApp.Models;
using System.Collections.Generic;
using System.Web.Http;
using System.Net;
using System.Web.Http.Results;
using System.Net.Http;

namespace ApiUnitTestProject
{
    [TestClass]
    public class VehiclesUnitTest
    {
        /// <summary>
        /// Test method to test api Method
        /// </summary>
        /// <returns>Cars List</returns>
        private IEnumerable<tblCar> GetTestCar()
        {
            var testCars = new List<tblCar>();
            testCars.Add(new tblCar { CarId = 1, Make = "Benz", Model = "i200", Engine = "GasEngine", Doors = 4, wheels = 4, cartype = "sedan", VehicleTypeId = 1 });
            testCars.Add(new tblCar { CarId = 2, Make = "Toyota", Model = "i100", Engine = "FuelEngine", Doors = 5, wheels = 4, cartype = "HachBack", VehicleTypeId = 1 });
            testCars.Add(new tblCar { CarId = 2, Make = "Duster", Model = "h000", Engine = "GasEngine", Doors = 5, wheels = 4, cartype = "sedan", VehicleTypeId = 1 });

            return testCars;
        }

        /// <summary>
        /// Test method for cars list
        /// </summary>
        [TestMethod]
        public void GetAllCars_ShouldReturnAllCars()
        {
            var testCar = GetTestCar();
            var controller = new VehicleController(testCar);
            var result = controller.GetCars() as List<tblCar>;

            Assert.AreEqual(testCar, result.Count);
        }

        /// <summary>
        /// Test method to test api Method
        /// </summary>
        /// <returns>Bikes List</returns>
        private IEnumerable<tblBike> GetTestBike()
        {
            var testBikes = new List<tblBike>();
            testBikes.Add(new tblBike { BikeId = 1, Make = "hero", Model = "h2o", Engine = "fuelEngine", wheels = 4, bikeType = "Off Road", VehicleTypeId = 2 });
            testBikes.Add(new tblBike { BikeId = 2, Make = "Suziki", Model = "ascent", Engine = "DieselEngine", wheels = 4, bikeType = "Road", VehicleTypeId = 2 });
            testBikes.Add(new tblBike { BikeId = 2, Make = "Mazda", Model = "Pulsor", Engine = "fuelEngine", wheels = 4, bikeType = "Road", VehicleTypeId = 2 });

            return testBikes;
        }

        /// <summary>
        /// Test method for Bikes list
        /// </summary>
        [TestMethod]
        public void GetAllBikes_ShouldReturnAllBikes()
        {
            var testbike = GetTestCar();
            var controller = new VehicleController(testbike);
            var result = controller.GetBikes() as List<tblCar>;

            Assert.AreEqual(testbike, result.Count);
        }

        /// <summary>
        /// Test Method for Updating cars
        /// </summary>
        /// <param name="CarId"></param>
        /// <param name="objCar"></param>
        [TestMethod]
        public void UpdateCarsTest(int CarId, tblCar objCar)
        {
            // Arrange  
            var controller = new VehicleController();
            tblCar objputcar = new tblCar();
            {
                objCar.CarId = 4;
                objCar.Make = "Audi";
                objCar.Model = "J20";
                objCar.Engine = "gasEngine";
                objCar.Doors = 4;
                objCar.wheels = 4;
                objCar.cartype = "HachBack";
                objCar.VehicleTypeId = 1;
            };
            // Act  
            IHttpActionResult actionResult = controller.PutCars(CarId, objputcar);
            var contentResult = actionResult as OkNegotiatedContentResult<tblCar>;
            Assert.IsNotNull(contentResult);
            Assert.AreEqual(HttpStatusCode.Accepted, contentResult.Request);
            Assert.IsNotNull(contentResult.Content);
        }


        /// <summary>
        /// Test Method for Updating bikes
        /// </summary>
        /// <param name="BikeId"></param>
        /// <param name="objBike"></param>
        [TestMethod]
        public void UpdateBikeTest(int bikeId, tblBike objBike)
        {
            // Arrange  
            var controller = new VehicleController();
            tblBike objputBike = new tblBike();
            {
                objBike.BikeId = 4;
                objBike.Make = "Hero";
                objBike.Model = "J20";
                objBike.Engine = "gasEngine";
                objBike.wheels = 4;
                objBike.bikeType = "";
                objBike.VehicleTypeId = 2;
            };
            // Act  
            IHttpActionResult actionResult = controller.PutBike(bikeId, objBike);
            var contentResult = actionResult as OkNegotiatedContentResult<tblBike>;
            Assert.IsNotNull(contentResult);
            Assert.AreEqual(HttpStatusCode.Accepted, contentResult.Request);
            Assert.IsNotNull(contentResult.Content);
        }

        /// <summary>
        /// Test method for Post Api meythod
        /// </summary>
        [TestMethod]
        public void AddCars()
        {
            var controller = new VehicleController();
            tblCar objpostcar = new tblCar();
            {
                objpostcar.CarId = 5;
                objpostcar.Make = "Audi";
                objpostcar.Model = "J20";
                objpostcar.Engine = "gasEngine";
                objpostcar.Doors = 4;
                objpostcar.wheels = 4;
                objpostcar.cartype = "HachBack";
                objpostcar.VehicleTypeId = 1;
            };

            HttpResponseMessage responseResult = controller.PostCars(objpostcar);
            var createdResult = responseResult;
            // Assert  
            Assert.IsNotNull(createdResult);
            Assert.AreEqual("DefaultApi", createdResult.RequestMessage);
        }


        /// <summary>
        /// Test method for Post Api method
        /// </summary>
        [TestMethod]
        public void AddBikes()
        {
            var controller = new VehicleController();
            tblBike objpostbike = new tblBike();
            {
                objpostbike.BikeId = 6;
                objpostbike.Make = "Audi";
                objpostbike.Model = "J20";
                objpostbike.Engine = "gasEngine";
                objpostbike.wheels = 4;
                objpostbike.bikeType = "Road";
                objpostbike.VehicleTypeId = 1;
            };

            HttpResponseMessage responseResult = controller.PostBikes(objpostbike);
            var createdResult = responseResult;
            // Assert  
            Assert.IsNotNull(createdResult);
            Assert.AreEqual("DefaultApi", createdResult.RequestMessage);
        }
    }
}
