﻿using Senai.Cleveland.WebApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Cleveland.WebApi.Repository
{
    public class MedicoRepositorio
    {
        public List<Medicos> Listar()
        {
            using (ClevelandContext ctx = new ClevelandContext())
            {
                return ctx.Medicos.ToList();
            }
        }
    }
}
