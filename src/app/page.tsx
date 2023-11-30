import { CopyButton } from "~/components/CopyButton";
import { faker } from "@faker-js/faker";

const threeRandomInfo = Array.from({ length: 3 }, () => {
  const randomName = faker.person.fullName();
  const randomEmail = faker.internet.email();

  return {
    name: randomName,
    email: randomEmail,
  };
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen space-y-8">
      <h3 className="text-2xl font-bold text-center text-gray-800">
        Generating your imaginary persona
      </h3>

      <div className="flex flex-col items-center justify-center mt-8 space-y-4">
        {threeRandomInfo.map((info) => (
          <div
            key={info.email}
            className="flex items-center justify-between w-96"
          >
            <div className="flex flex-col">
              <div className="flex flex-row items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  {info.name}
                </p>
                <CopyButton value={info.name} />
              </div>
              <div
                className="flex flex-row items-center justify-between"
                key={info.email}
              >
                <p className="text-sm text-gray-500">{info.email}</p>
                <CopyButton value={info.email} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
