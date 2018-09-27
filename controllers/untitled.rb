def encode_string(input_string)
  return_string = pop_first_char(input_string)
  input_string.each_char do |char|
    if char.match?(/[[:alpha:]]/)
      return_string << value_of_letter(char).to_s
    elsif char.match?(/[[:digit:]]/)
      return_string << value_of_num(char).to_s
    end
  end
  return_string
end

def pop_first_char(input_string)
  return_string   = input_string[0]
  input_string[0] = ''
  return_string
end

def value_of_letter(letter)
  letters = ('a'..'z').to_a
  letters.index(letter.downcase)
end

def value_of_num(num)
  9 - num.to_i
end
