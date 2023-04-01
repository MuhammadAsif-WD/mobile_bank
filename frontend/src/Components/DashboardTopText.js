import React from "react";

const DashboardTopText = () => {
  return (
    <div className="border-2 border-secondary w-96 mx-auto p-3">
      <div>
        <p className="font-bold mb-5">This is notice header.</p>
        <p>
          This is the message body. you customize this body massage. Then go to
          the Admin dashboard page. Then click recharge Dashboard, and now edit
          this section.
        </p>
        <p className="mt-5">This is footer notice.</p>
      </div>
    </div>
  );
};

export default DashboardTopText;
