import * as C from './Styled'

type Props = {
  text: string,
  placeholder: string,
  value: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = ({text, placeholder, value, onChange}: Props) => {
  return (
    <div>
      <C.inputEl type={text} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}