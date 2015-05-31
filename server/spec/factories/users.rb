FactoryGirl.define do
  factory :user do
    uid {"vaibhav.khl@gmail.com"}
    email {uid}
    name {"vaibhav"}
    provider {"email"}
    password {"P@ssw0rd"}
    password_confirmation {"P@ssw0rd"}
    confirmed_at {Time.now}
  end
end