import React, { Fragment } from "react";

const ShippingAddress = () => {
  return (
    <Fragment>
      <section className="customer-main-content">
        <div className="shipping-address">
          <h5 className="shipping-address-title">Choose another address</h5>
          <p className="shipping-address-text">Manage your shipping address</p>
        </div>

        <div className="add-new-address">
          <h5>Add new address</h5>
        </div>

        <div className="default-address">
          <p className="recipient-name mb-0">Andreas Jane</p>
          <p className="complete-address mt-0">
            Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten
            Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja,
            Kab. Banyumas, 53181
          </p>

          <p className="change-address">Change address</p>
        </div>
      </section>
    </Fragment>
  );
};

export default ShippingAddress;
