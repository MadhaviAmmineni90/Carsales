using CarSalesApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace CarSalesApp.Controllers
{
    public class VehicleController : ApiController
    {
        private CarSalesDBEntities objcarDbentities = new CarSalesDBEntities();
        IEnumerable<tblCar> objCarobj = new List<tblCar>();

        public VehicleController()
        {

        }

        public VehicleController(IEnumerable<tblCar> objCarcon)
        {
            this.objCarobj = objCarcon;
        }

        #region Cars

        /// <summary>
        /// Method to Get the list of vehicles
        /// </summary>
        /// <returns>List</returns>
        [HttpGet]
        public List<tblCar> GetCars()
        {
            objcarDbentities.Configuration.ProxyCreationEnabled = false;
            return objcarDbentities.tblCars.ToList();

        }

        /// <summary>
        /// Method to Update existing Cars
        /// </summary>
        /// <param name="CarId"></param>
        /// <param name="objCar"></param>
        /// <returns>IHttpActionResult</returns>
        [HttpPut]
        public IHttpActionResult PutCars(int CarId, tblCar objCar)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Not a valid data");
            }

            if (CarId != objCar.CarId)
            {
                return BadRequest();
            }
            var existingCar = objcarDbentities.tblCars.Where(c => c.CarId == objCar.CarId).FirstOrDefault<tblCar>();
            if (existingCar != null)
            {
                existingCar.Make = objCar.Make;
                existingCar.Model = objCar.Model;
                existingCar.Engine = objCar.Engine;
                existingCar.Doors = objCar.Doors;
                existingCar.wheels = objCar.wheels;
                existingCar.cartype = objCar.cartype;
                objcarDbentities.SaveChanges();
            }
            else
            {
                return NotFound();
            }
            return Content(HttpStatusCode.Accepted, objCar);
        }

        /// <summary>
        /// Method to add new cars
        /// </summary>
        /// <param name="objCars"></param>
        /// <returns>IHttpActionResult</returns>
        ///[HttpPost]
        public HttpResponseMessage PostCars([FromBody]tblCar objCars)
        {
            objcarDbentities.tblCars.Add(objCars);
            return ToJson(objcarDbentities.SaveChanges());
        }

        #endregion


        #region Bikes


        /// <summary>
        /// Method to Get the list of vehicles
        /// </summary>
        /// <returns>List</returns>
        [HttpGet]
        public IEnumerable<tblBike> GetBikes()
        {
            objcarDbentities.Configuration.ProxyCreationEnabled = false;
            return objcarDbentities.tblBikes.ToList();
        }

        /// <summary>
        /// Method to Update existing Cars
        /// </summary>
        /// <param name="BikeId"></param>
        /// <param name="objBike"></param>
        /// <returns>IHttpActionResult</returns>
        [HttpPut]
        public IHttpActionResult PutBike(int BikeId, tblBike objBike)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Not a valid data");
            }

            if (BikeId != objBike.BikeId)
            {
                return BadRequest();
            }
            var existingBike = objcarDbentities.tblBikes.Where(b => b.BikeId == objBike.BikeId).FirstOrDefault<tblBike>();
            if (existingBike != null)
            {
                existingBike.Make = objBike.Make;
                existingBike.Model = objBike.Model;
                existingBike.Engine = objBike.Engine;
                existingBike.wheels = objBike.wheels;
                existingBike.bikeType = objBike.bikeType;
                objcarDbentities.SaveChanges();
            }
            else
            {
                return NotFound();
            }
            return Ok();
        }

        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }

        /// <summary>
        /// Method to add new Bikes
        /// </summary>
        /// <param name="objBikes"></param>
        /// <returns>IHttpActionResult</returns>
        ///[HttpPost]
        public HttpResponseMessage PostBikes([FromBody]tblBike objBikes)
        {
            objcarDbentities.tblBikes.Add(objBikes);
            objcarDbentities.SaveChanges();
            return ToJson(objcarDbentities.SaveChanges());
        }

        #endregion
    }
}