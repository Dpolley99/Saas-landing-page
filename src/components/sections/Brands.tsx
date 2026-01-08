import Container from "../shared/Container"
import { Title } from "../shared/Title"

const logo = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "youtube",
]

const Brands = () => {
  return (
    <section>
      {" "}
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Title> Trusted by Industry Leaders </Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4 pt-10">
          {logo.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body group flex flex-1 gap-x-2 justify-center"
            >
              <img
                src={`src/assets/logo/${logo}.png`}
                width="auto"
                height="60"
                alt={logo}
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0! group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Brands
