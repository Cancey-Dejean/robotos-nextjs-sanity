import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Newsletter() {
  return (
    <div className="py-20">
      <h2>Subscribe</h2>
      <p>Get notified when we launch</p>
      <form
        action=""
        className="mx-auto flex w-full max-w-lg flex-col items-stretch gap-4"
      >
        <Input
          type="email"
          placeholder="Email"
          className="min-h-[88px] text-2xl"
        />
        <Button className="bg-pink-200 px-4 text-white" type="submit">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
