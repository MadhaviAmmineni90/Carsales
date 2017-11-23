using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarSalesApp.Controllers
{
    public class CarsController : ApiController
    {
        private CarSalesDBEntities objcarDbentities = new CarSalesDBEntities();
        /// <summary>
        /// Method to Get the list of vehicles
        /// </summary>
        /// <returns>List</returns>
        [HttpGet]
        public IEnumerable<tblCar> GetCars()
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
            return Ok();
        }

    }
}
