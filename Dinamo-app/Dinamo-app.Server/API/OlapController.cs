using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using System.Data;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace LightSwitchApplication.API
{
    public class OlapController : ApiController
    {
        public object Get()
        {
            using (var context = ServerApplicationContext.CreateContext())
            {
                return context.Application.User.FullName;
            }
        }

    
    }
}