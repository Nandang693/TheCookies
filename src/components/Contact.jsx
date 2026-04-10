const Contact = () => {
  return (
    <div id="contact" className="bg-secondary flex flex-col items-center py-10  ">
      <h2 className="text-2xl font-bold mb-8">Contact me</h2>

      <form className="w-svw max-w-full flex flex-col gap-4 mr-10 lg:max-w-3/4">
        <div className="flex items-center gap-4">
          <label className="w-24 text-right font-medium">Name</label>
          <input type="text" className="flex-1 border-2 border-black px-2 py-1 outline-none focus:border-amber-950" />
        </div>

        <div className="flex items-center gap-4">
          <label className="w-24 text-right font-medium">
            Email<span className="text-red-500 ml-0.5">*</span>
          </label>
          <input type="email" placeholder="you@example.com" className="flex-1 border-2 border-black px-2 py-1 outline-none focus:border-amber-950" />
        </div>

        <div className="flex items-start gap-4">
          <label className="w-24 text-right font-medium mt-1">Message</label>

          <textarea rows="5" className="flex-1 border-2 border-black px-2 py-1 outline-none focus:border-amber-950 resize-y"></textarea>
        </div>

        <div className="flex justify-end mt-2">
          <button type="submit" className="bg-slate-300 px-4 py-2 rounded shadow hover:bg-slate-400 font-semibold">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
