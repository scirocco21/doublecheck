class Sentence < ApplicationRecord
  belongs_to :project, inverse_of: :sentences
  has_many :tones, as: :analyzable
  accepts_nested_attributes_for :tones
end
