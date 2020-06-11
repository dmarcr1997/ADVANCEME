class RemoveHappinessFromSkills < ActiveRecord::Migration[6.0]
  def change
    remove_column :skills, :happiness
    add_column :skills, :last_train, :datetime
    add_column :users, :user_level, :float
  end
end
