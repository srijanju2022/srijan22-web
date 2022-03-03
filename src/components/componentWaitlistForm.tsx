import { FormEvent } from "react";

export const WaitlistForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form className="space-x-3 flex" onSubmit={handleSubmit}>
      <input
        type="email"
        required
        className="bg-primary-500 w-full border-2 border-white text-white px-2 py-1 ring-0  active:ring-0 hover:ring-0 focus:ring-0 focus:border-secondary-500 "
        placeholder="Email"
      />
      <button
        className="bg-white text-primary-500 font-bold px-4 py-2 hover:bg-secondary-500"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
