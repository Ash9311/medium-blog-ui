import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Link } from "react-router-dom"
import { SignupInput } from "@ashutoshmulky/medium-common";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });
    return <div className="h-screen flex justify-center flex-col">

        <div className="flex justify-center">
            <div>
                <div>

                    <div className="text-xl font-bold">
                        Create an account
                    </div>
                    <div className="text-slate-400">
                        {type == "signin" ? "Dont have an account?" : "already have an account?"}
                        <Link className="pl-2 underline" to={type == "signin" ? "/signup" : "/signin"}>{type == "signin" ? "Sign up" : "Sign in"}</Link>
                    </div>
                </div>
                <div>
                    <LabelledInput label="Name" placeholder="Ashutosh Mulky" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }}></LabelledInput>
                    <LabelledInput label="Username" placeholder="john@gmail.com" onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }}></LabelledInput>
                    <LabelledInput label="Password" type={"password"} placeholder="Ashutosh Mulky" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            name: e.target.value
                        }))
                    }}></LabelledInput>
                    <button type="button" className="w-full mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type == "signup" ? "Sign up" : "Sign in"}</button>
                </div>
            </div>
        </div>
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm font-medium text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
         focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder} required />
    </div>
}