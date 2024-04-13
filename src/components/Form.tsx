import { zodResolver } from "@hookform/resolvers/zod";
import { EnvelopeSimple, FolderLock } from "@phosphor-icons/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const loginUserSchema = z.object({
  email: z
    .string()
    .email("email format is invalid")
    .endsWith("@gmail.com", "email must be from gmail"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

export default function FormLogin() {
  const [output, setOutput] = useState<string>("");

  type loginUserFormData = z.infer<typeof loginUserSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUserFormData>({
    resolver: zodResolver(loginUserSchema),
  });

  const formSubmit = (data: loginUserFormData) => {
    setOutput(JSON.stringify(data, null, 2));
  };

  console.log({ output });

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(formSubmit)}>
        <div className="w-[440px] bg-zinc-950 flex gap-2 items-center p-3 ">
          <EnvelopeSimple size={20} color="#899BFF" />
          <input
            placeholder="E-mail"
            className="w-full h-auto bg-zinc-950 outline-none text-lg "
            {...register("email", { required: true })}
          />
        </div>
        {errors.email && (
          <span className="font-light text-xs text-red-600 ">
            {errors.email.message}
          </span>
        )}
        <div className="w-[440px] bg-zinc-950 flex gap-2 items-center p-3 ">
          <FolderLock size={20} color="#899BFF" />
          <input
            type="password"
            id="password"
            placeholder="Senha"
            className="w-full h-full bg-zinc-950 outline-none text-lg "
            {...register("password")}
          />
        </div>
        {errors.password && (
          <span className="font-light text-xs text-red-600 ">
            {errors.password.message}
          </span>
        )}
        <span className="font-semibold text-base text-[#899BFF]">
          Esqueci minha senha
        </span>

        <button
          type="submit"
          className="w-[440px] bg-[#899BFF] h-14 font-bold mt-10"
        >
          ENTRAR
        </button>
      </form>
    </>
  );
}
