import { useState, FormEvent } from "react";
import { supabase } from "../utils/supabaseClient";

export const WaitlistForm = () => {
  const [email, setEmail] = useState<string | undefined>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("wishlist_submission")
      .insert([{ email }]);
  };

  return (
    <form className="space-x-3 flex" onSubmit={handleSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
