interface Props {
  label: string;
  value: any;
  type?: 'text' | 'email' | 'password';
  required?: boolean;
  changeValue: (newValue: any) => void;
}

export default function AuthInput(props: Props) {
  return (
    <div className="flex flex-col mt-4">
      <label htmlFor="">{props.label}</label>
      <input 
        type={props.type ?? 'text'} 
        value={props.value} 
        onChange={e => props.changeValue(e.target.value)} 
        required={props.required}
        className={`
          px-4 py-3 rounded-lg mt-2 bg-gray-200
          border focus:border-blue-500 focus:outline-none focus:bg-white

        `}
      />
    </div>
  )
}
