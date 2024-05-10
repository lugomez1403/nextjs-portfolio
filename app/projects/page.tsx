import Link from "next/link";
import React from "react";
import { IconNode, Github, Mail, Linkedin, Hexagon, Eye, Signal } from "lucide-react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";

export const revalidate = 60;
export default async function ProjectsPage() {

  return (
    <div className="relative pb-16">
      <Navigation />
      
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
       
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
            <Card>
              <Link href={"https://github.com/lugomez1403/edgebound-test"}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Github></Github>
                      
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Test prueba con Node.js
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    CRUD Node js, express y mongodb
                  </p>
                  <br></br>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
            <Card>
              <Link href={"https://mega.nz/file/5c520Y7I#GfP_Oyn3Dhi7Hc5odW7_y3FgkK7EgR0t0z9hGCnaJyo"}>
                <article className="relative w-full h-full p-4 md:p-8">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                      
                    </div>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Signal></Signal>
                      
                    </span>
                  </div>

                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    Power BI
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    Dashboard de ventas de la compañia ACME
                  </p>
                  <br></br>
                  <div className="absolute bottom-4 md:bottom-8">
                    <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                      Read more <span aria-hidden="true">&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>
            </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />
      </div>
      
    </div>
  );
}
