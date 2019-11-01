using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Cleveland.WebApi.Repository;

namespace Senai.Cleveland.WebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        MedicoRepositorio MedicoRepositorio = new MedicoRepositorio();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(MedicoRepositorio.Listar());
        }
    }
}