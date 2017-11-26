using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarSalesApp.Controllers
{
    public class VehicleTypeController : ApiController
    {
        private CarSalesDBEntities objcarDbentities = new CarSalesDBEntities();

        #region Cars

        /// <summary>
        /// Method to Get the list of vehiclesTypes
        /// </summary>
        /// <returns>List</returns>
        [HttpGet]
        public IEnumerable<tblVehicleType> GetvehicleTypes()
        {
            objcarDbentities.Configuration.ProxyCreationEnabled = false;
            return objcarDbentities.tblVehicleTypes.ToList();
        }


        /// <summary>
        /// Method to add new VehicleTypes
        /// </summary>
        /// <param name="objCars"></param>
        /// <returns>IHttpActionResult</returns>
        ///[HttpPost]
        public void VehicleTypes([FromBody]tblCar objVehicleTypes)
        {
            objcarDbentities.tblCars.Add(objVehicleTypes);
            objcarDbentities.SaveChanges();

        }

        #endregion
    }
}
