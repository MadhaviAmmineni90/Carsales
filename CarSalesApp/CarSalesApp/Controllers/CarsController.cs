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
        [HttpGet]
        public IEnumerable<tblCar> Get()
        {
            using (CarSalesDBEntities entities = new CarSalesDBEntities())
            {
                entities.Configuration.ProxyCreationEnabled = false;
                return entities.tblCars.ToList();
            }
        }

      
    }
}
