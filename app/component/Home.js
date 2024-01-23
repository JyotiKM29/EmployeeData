"use client";
import { useEffect, useState } from "react";
import Empoyee from "./Empoyee";

export default function Home() {
  const [data, setData] = useState();

  async function fetchData() {
    try {
      const res = await fetch(
        "https://653686dbbb226bb85dd244f8.mockapi.io/employee"
      );

      if (!res.ok) {
        throw new Error("Error :", res.status);
      }
      const data = await res.json();

      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-6 px-14 py-10">
      {data &&
        data.map((emp) => (
          <Empoyee
            key={emp.id}
            id={emp.id}
            name={emp.name}
            doj={emp.date_of_joining}
            designation={emp.designation}
            email={emp.email}
            mobile={emp.mobile}
            salary={emp.salary}
            status={emp.status}
          />
        ))}
    </div>
  );
}
