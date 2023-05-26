Feature: Check uploaded file size

    Scenario Outline: Upload a file

        Given I upload file "<fileName>" in "<dir>"
        When I check "<fileName>" uploaded to "<dir>"
        Then check file "<fileName>" in "<dir>" size is equal to filesize of initial file

        Examples:
            | fileName  | dir   |
            | image.png | /test |
