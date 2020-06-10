class AddUserIdToSkills < ActiveRecord::Migration[6.0]
  def change
    add_column :skills, :user_id, :integer
    add_column :goals, :user_id, :integer
  end
end
