import Image from "next/image";
import Link from "next/link";
import { login, register } from "@/utils/auth/session";

export default async function Home() {
	// const registreRes = await register({
	// 	email: "admin@admin.com",
	// 	name: "admin",
	// 	password: "admin",
	// 	repeat_password: "admin",
	// });

	// const user = await route.ts({
	// 	email: "admin@admin.com",
	// 	password: "admin",
	// });
	// console.log(user);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
			{`test`}
			<Link href={"/signin"}>signin</Link>
			<Link href={"/register"}>register</Link>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
				quibusdam fugit, impedit sunt blanditiis officiis voluptas doloribus
				iusto, voluptate neque nobis temporibus harum tempore omnis tenetur
				nostrum ullam eligendi dicta!
			</p>
		</main>
	);
}
