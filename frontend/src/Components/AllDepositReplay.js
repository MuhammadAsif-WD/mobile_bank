import React from "react";

const AllDepositReplay = () => {
  return (
    <div>
      <div className="flex items-center gap-1 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-info/80"
          width="24"
          height="24"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3a443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5a445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142c23.5-55.2 35.5-113.9 35.8-174.5c.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48s47.9 21.5 47.9 48s-21.5 48-47.9 48z"
          />
        </svg>
        <h1 className="font-medium">Your all ticket replay</h1>
      </div>
      <section className="flex flex-col gap-3">
        <div className="bg-secondary/50 border border-info/80 p-3 rounded">
          <div className="flex items-center gap-1">
            <p>10/12/2023</p> |<p>10:40 pm</p>
          </div>
          <p className="font-medium text-white/80 text-lg">
            Sender name <span className="text-sm">( Stuff / Admin )</span>
          </p>

          <p className="mt-3">Hello,</p>
          <p>Thank you for being hold.</p>
          <p className="mt-3">
            Body Message Could you please update us the exact domain name which
            you are getting above mentioned error.Body Message Could you please
            update us the exact domain name which you are getting above
            mentioned error.
          </p>
          <p className="mt-3">Regards,</p>
          <p>Sender name</p>
        </div>
        <div className="bg-secondary/50 border border-info/80 p-3 rounded">
          <div className="flex items-center gap-1">
            <p>10/12/2023</p> |<p>10:40 pm</p>
          </div>
          <p className="font-medium text-white/80 text-lg">
            Sender name <span className="text-sm">( Stuff / Admin )</span>
          </p>

          <p className="mt-3">Hello,</p>
          <p>Thank you for being hold.</p>
          <p className="mt-3">
            Body Message Could you please update us the exact domain name which
            you are getting above mentioned error.Body Message Could you please
            update us the exact domain name which you are getting above
            mentioned error.
          </p>
          <p className="mt-3">Regards,</p>
          <p>Sender name</p>
        </div>
      </section>
    </div>
  );
};

export default AllDepositReplay;
