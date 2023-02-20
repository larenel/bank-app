import React from 'react'
import { clients } from '../constants'
import s from '../s'
const Clients = () => (
  <section className={`${s.flexCenter} my-4`}>
    <div className={`${s.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div
          className={`flex-1 ${s.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          key={client.id}>
          <img
            src={client.logo}
            alt="cl;ient"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
)

export default Clients
