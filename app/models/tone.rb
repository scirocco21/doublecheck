class Tone < ApplicationRecord
  belongs_to :analyzable, polymorphic: true, inverse_of: :tones
end
