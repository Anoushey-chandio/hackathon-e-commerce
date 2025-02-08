import Button from "./button";

// components/Checkout.js
const Checkout = () => {
  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 p-5">
      <div className="flex flex-col lg:flex-row gap-10 max-w-screen-xl w-full">
        {/* Left Side: Billing Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 overflow-y-auto max-w-full max-h-[1200px]">
          <h2 className="text-2xl font-semibold mb-6">Billing Details</h2>

          {/* Form Rows */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Country / Region"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Province"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Additional Information"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>

        {/* Right Side: Product Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-full max-h-[600px] overflow-y-auto">
          <h3 className="text-xl font-semibold mb-6">Product Summary</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Asgaard Soda *1</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Subtotal</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>Rs. 250,000.00</span>
            </div>
            <div className="border-b border-gray-300 my-4"></div>

            {/* Payment Method */}
            <h4 className="text-lg font-medium mb-2">Payment Method</h4>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="direct-transfer"
                name="payment-method"
                className="w-5 h-5"
              />
              <label htmlFor="direct-transfer">Direct Bank Transfer</label>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Make your payment directly into our bank account. Please use
              your Order ID as the payment reference. Your order will not be
              shipped until the funds have cleared in our account.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <input
                type="radio"
                id="cod"
                name="payment-method"
                className="w-5 h-5"
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>

            {/* Privacy Policy */}
            <p className="text-sm text-gray-600 mt-4">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and
              for other purposes described in our privacy policy.
            </p>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <Button label="Place Order" outline={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

  
  
  
  